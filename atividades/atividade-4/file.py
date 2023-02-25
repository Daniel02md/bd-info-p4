from os import mkdir
from os.path import curdir


base = "avaliacao-"

for i in range(1, 11):
    name = base+str(i)
    try:
        mkdir(name)
    except:
        ...
    finally:
        print(name)