def count_capital_letters(txt):
    count = 0
    for n in txt:
        if n.isupper():
            count += 1
    print(count)
    
    
print(count_capital_letters("DANIEL abramiani"))

import numpy as np

example_input = [1, .2, .1, .05, .2]

example_weigths = [.2, .12, .4, .6, .90]

example_input

[1, 0.2, 0.1, 0.05, 0.2]

example_weigths

[0.2, 0.12, 0.4, 0.6, 0.9]

input_vector = np.array(example_input)


weights = np.array(example_weigths)

weights = np.array(example_weigths)

blas_weight = .2

activation_level = np.dot(input_vector, weights)+(blas_weight * 1)

activation_level

0.6740000000000002

x=np.array([1, 0.2, 0.1, 0.05, 0.2, blas_weight])


y=np.array([0.2 , 0.12, 0.4 , 0.6 , 0.9, 1.])


np.dot(x,y)

0.6740000000000002
