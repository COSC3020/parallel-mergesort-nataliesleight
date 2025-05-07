# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The span of the parallel program is $\Theta(logn)$. This is during parallelization, 2 segments are added to each other until each have been combined into one array. This is similar to a binary tree, which has a depth of $logn$. 


### Testing

The testing for this code is a little unconventional. My code first tests for input size of 0 or 1, returning the array for assertion of correct value outside. For others, they call the function with their array and an integer I used to assert it with the right value. This is done in the '.then' callback function. An if statment is used to check which assertion to use.

### Sources

I referenced this link for my mergesort implementation: https://www.geeksforgeeks.org/merge-sort/# 

I received help from Lars Kothoff and the TA.

I heavily referenced the Map Reduce code provided in the slide notes. 

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
