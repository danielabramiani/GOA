import numpy as np

example_input = [1, .2, .1, .05, .2]
example_weights = [.2, .12, .4, .6, .90]
input_vector = np.array(example_input)
weights = np.array(example_weights)
bias_weight = .2

activation_level = np.dot(input_vector, weights) + (bias_weight * 1)
threabold = 0.5
if activation_level >= threabold:
    perceptron_output = 1
else:
    perceptron_output = 0

expected_output = 0
new_weights = []
for i, x in enumerate(example_input):
    new_weights.append(weights[i] + (expected_output - perceptron_output) * x)
print(new_weights)