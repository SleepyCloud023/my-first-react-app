from functools import reduce

a = list(range(10))
sum_imperative = 0
sum_functional = 0

sum_imperative = 5

for i in a:
    sum_imperative += i
    
sum_array = lambda input: reduce(lambda x, y : x+y, input)

print(sum_imperative)
print(sum_functional)
    
