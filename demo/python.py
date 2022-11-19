from collections import deque


def topo(G, ind=None, Q=[1]):
    if ind == None:
        ind = [0] * (len(G) + 1)  # this is a comment
        for u in G:
            for v in G[u]:
                ind[v] += 1
        Q = deque()
        for i in G:
            if ind[i] == 0:
                Q.append(i)
    if len(Q) == 0:
        return
    v = Q.popleft()
    print(v)
    for w in G[v]:
        ind[w] -= 1
        if ind[w] == 0:
            Q.append(w)
    topo(G, ind, Q)


class SomeClass:
    def create_arr(self): # An instance method
        self.arr = []

    def insert_to_arr(self, value):  #An instance method
        self.arr.append(value)

    @classmethod
    def class_method(cls):
        print("the class method was called")

import unittest

def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[int((size - 1) / 2)]
    else:
        return (copy[int(size/2 - 1)] + copy[int(size/2)]) / 2

class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.assertEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)

if __name__ == '__main__':
    unittest.main()


from itertools import groupby
lines = '''
This is the
first paragraph.

This is the second.
'''.splitlines()
# Use itertools.groupby and bool to return groups of
# consecutive lines that either have content or don't.
for has_chars, frags in groupby(lines, bool):
    if has_chars:
        print (' '.join(frags))
# PRINTS:
# This is the first paragraph.
# This is the second.
