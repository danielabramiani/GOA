def play_match(home_team, away_team, home_goals, away_goals):
    home_team_stats = (home_goals, away_goals)
    away_team_stats = (away_goals, home_goals)

    if home_goals > away_goals:
        home_team_stats += (1, 0, 0)
        away_team_stats += (0, 0, 1)
    elif home_goals < away_goals:
        home_team_stats += (0, 0, 1)
        away_team_stats += (1, 0, 0)
    else:
        home_team_stats += (0, 1, 0)
        away_team_stats += (0, 1, 0)

    return home_team_stats, away_team_stats

def print_standings(teams):
    sorted_teams = sorted(teams, key=lambda x: x[1], reverse=True)
    print("Premier League Standings:")
    for i, team in enumerate(sorted_teams):
        team_name = team[0]
        points = team[1]
        matches_played = team[2]
        matches_won = team[3]
        matches_drawn = team[4]
        matches_lost = team[5]
        goals_scored = team[6]
        goals_conceded = team[7]
        print(f"{i+1}. {team_name}: P{matches_played} | W{matches_won} | D{matches_drawn} | L{matches_lost} | GF{goals_scored} | GA{goals_conceded} | Pts{points}")

teams = [
    ("Liverpool", 0, 0, 0, 0, 0, 0, 0),
    ("Manchester City", 0, 0, 0, 0, 0, 0, 0),
    ("Chelsea", 0, 0, 0, 0, 0, 0, 0),
    ("Manchester United", 0, 0, 0, 0, 0, 0, 0)
]

matches = [
    ("Liverpool", "Manchester City", 2, 1),   
    ("Chelsea", "Manchester United", 1, 1),   
    ("Liverpool", "Chelsea", 0, 2),           
    ("Manchester City", "Manchester United", 3, 3)
]

for match in matches:
    home_team, away_team, home_goals, away_goals = match
    for i, team in enumerate(teams):
        if team[0] == home_team:
            home_team_stats, away_team_stats = play_match(home_team, away_team, home_goals, away_goals)
            teams[i] = (*home_team_stats, *teams[i][1:])  
            teams[i+1] = (*away_team_stats, *teams[i+1][1:])  

print_standings(teams)