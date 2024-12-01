import pygame
import random

# ინიციალიზაცია pygame
pygame.init()

# ეკრანის ზომა და ფანჯრის სახელი
WIDTH, HEIGHT = 900, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Catch the Ball")

# ფერები
RED = (255, 0, 0)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# ბურთის ზომა და სიჩქარე
ball_radius = 20
ball_speed = 3

# ტექსტის ფონტი და ქულა
font = pygame.font.SysFont("Arial", 40)
score = 0
game_over = False

# ბურთის საწყისი პოზიცია
ball_x = random.randint(ball_radius, WIDTH - ball_radius)
ball_y = random.randint(ball_radius, HEIGHT - ball_radius)

# ფუნქცია ბურთის დახატვისთვის
def draw_ball():
    pygame.draw.circle(screen, RED, (ball_x, ball_y), ball_radius)

# ფუნქცია ტექსტის გამოსახვისთვის
def display_text(text, x, y):
    label = font.render(text, True, BLACK)
    screen.blit(label, (x, y))

# მთავარი თამაში
def main():
    global ball_x, ball_y, score, game_over
    clock = pygame.time.Clock()

    while True:
        screen.fill(WHITE)  # ეკრანის გასუფთავება

        # "Game Over"-ის ჩვენება თუ თამაში დასრულდა
        if game_over:
            display_text(f"Game Over (Score: {score})", WIDTH // 2 - 180, HEIGHT // 2 - 20)
            display_text("Click to Restart", WIDTH // 2 - 150, HEIGHT // 2 + 40)
        else:
            draw_ball()  # ბურთის დახატვა
            display_text(f"Score: {score}", 10, 10)  # ქულის ჩვენება

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            if event.type == pygame.MOUSEBUTTONDOWN:
                mouse_x, mouse_y = pygame.mouse.get_pos()
                if game_over:
                    game_over = False
                    score = 0
                    ball_x = random.randint(ball_radius, WIDTH - ball_radius)
                    ball_y = random.randint(ball_radius, HEIGHT - ball_radius)
                elif (ball_x - mouse_x)**2 + (ball_y - mouse_y)**2 <= ball_radius**2:
                    score += 1
                    ball_x = random.randint(ball_radius, WIDTH - ball_radius)
                    ball_y = random.randint(ball_radius, HEIGHT - ball_radius)
                else:
                    game_over = True

        if not game_over:
            ball_y += ball_speed
            if ball_y > HEIGHT - ball_radius:
                game_over = True

        pygame.display.flip()
        clock.tick(45)

# თამაშის დაწყება
main()
