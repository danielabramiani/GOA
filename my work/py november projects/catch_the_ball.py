import pygame
import random

# ინიციალიზაცია pygame
pygame.init()

# ეკრანის და თამაშის პარამეტრები
WIDTH, HEIGHT = 900, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("catch the ball")

# ფერები
RED = (255, 0, 0)
BLACK = (0, 0, 0)

# ბურთის პარამეტრები
ball_radius = 20
ball_speed = 3

# ტექსტის ფონტი
font = pygame.font.SysFont("Arial", 60)

# თამაშის პარამეტრები
score = 0
game_over = False
ball_x = random.randint(ball_radius, WIDTH - ball_radius)
ball_y = random.randint(ball_radius, HEIGHT - ball_radius)

# ფუნქცია ბურთის გასახატად
def draw_ball():
    pygame.draw.circle(screen, RED, (ball_x, ball_y), ball_radius)

# ფუნქცია ტექსტის გამოსაჩენად ეკრანზე
def display_text(text, x, y):
    label = font.render(text, True, BLACK)
    screen.blit(label, (x, y))

# მთავარი თამაში
def main():
    global ball_x, ball_y, score, game_over
    clock = pygame.time.Clock()

    while True:
        screen.fill((255, 255, 255))  # ეკრანის დაფარვა თეთრად

        # თუ თამაში დასრულებულია, აჩვენებს "Game Over" ტექსტს
        if game_over:
            display_text(f"game over( point: {score}", WIDTH // 2 - 150, HEIGHT // 2)
            display_text("restart", WIDTH // 2 - 130, HEIGHT // 2 + 40)
        else:
            draw_ball()  # ბურთის ხატვა
            display_text(f"point: {score}", 10, 10)  # ქულის ჩვენება

        # მოვლენების დამუშავება (მაუსის დაკლიკვა და თამაშიდან გამოსვლა)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # თამაშიდან გამოსვლა, თუ ფანჯარა დაიხურა
                pygame.quit()
                return
            if event.type == pygame.MOUSEBUTTONDOWN:
                mouse_x, mouse_y = pygame.mouse.get_pos()
                
                # თუ თამაში დასრულებულია, დააჭირე რესტარტისთვის
                if game_over:
                    game_over = False
                    score = 0  # ქულის გაწმენდა
                    ball_x = random.randint(ball_radius, WIDTH - ball_radius)
                    ball_y = random.randint(ball_radius, HEIGHT - ball_radius)
                
                # თუ ბურთი დაჭერილი იყო, გაზრდი ქულა და გადააყენე ბურთი
                elif (ball_x - mouse_x)**2 + (ball_y - mouse_y)**2 <= ball_radius**2:
                    score += 1
                    ball_x = random.randint(ball_radius, WIDTH - ball_radius)
                    ball_y = random.randint(ball_radius, HEIGHT - ball_radius)
                else:  # თუ ბურთი გამოტოვდა, თამაში დასრულდა
                    game_over = True

        # თუ თამაში არ დასრულდა, ბურთი ეშვება ქვემოთ
        if not game_over:
            ball_y += ball_speed
            if ball_y > HEIGHT - ball_radius:  # თუ ბურთი დაეცა ეკრანიდან, თამაში დასრულდა
                game_over = True

        pygame.display.flip()  # ეკრანის განახლება
        clock.tick(45)  # თამაშის სიჩქარის კონტროლი 
        

# თამაში დაწყება
main()
