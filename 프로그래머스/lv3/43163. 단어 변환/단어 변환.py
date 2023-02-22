from collections import deque

def solution(beginWord, targetWord, wordList) -> int:
    wordSet = set(wordList)
    if targetWord not in wordSet:
        return 0
    
    queue = deque([(beginWord, 1)])
    visited = set([beginWord])
    
    while queue:
        currentWord, level = queue.popleft()
        for i in range(len(currentWord)):
            for j in range(26):
                newWord = currentWord[:i] + chr(97+j) + currentWord[i+1:]
                if newWord in wordSet and newWord not in visited:
                    if newWord == targetWord:
                        return level
                    queue.append((newWord, level + 1))
                    visited.add(newWord)
    return 0
