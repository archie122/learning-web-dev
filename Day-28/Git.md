Version Control 
 - It is the major concept that surrounds all of Git. When a project is created, Git is used to track the changes that are made to the project. This allows for easy collaboration between team members. When someone on the team makes a change, Git is used to track the change and ensure that it is reflected in the project. If a change is made that causes problems, Git can be used to revert the change.

Git 
 - To set up a git repository, simply use 'git init' in the terminal of the folder you want to track. 
 - You can also use 'git status' to see what files are being tracked in the repository. 
 - To commit changes, use 'git add' to add the file. This only adds the file to the list of files being tracked.
 - To commit the file, use 'git commit -m "message"'. In the message, you can add a description of the change.
   - You can also use 'git add .' to add all the files in the folder.
 - Using the 'git log' command, you can see a list of all the commits that have been made to the repository. 
 - The working directory is the folder that is currently being tracked and has the files that are being committed.
 - Using the 'git diff' with the file name will show you the changes that have been made to the file.
 - Using the 'git diff --staged' will show you the changes that have been made to the file but not yet committed.
 - Then using the command 'git checkout <branch>' will switch to the specified branch.
 - Using the command 'git remote add' will add a remote repository.
 - Using the command 'git push' will push the changes to the remote repository.
 - To create a clone, use the command 'git clone url'. 


What is GitHub?
- An online repository for storing and sharing code
  
What is the main branch? 
- The main branch is the branch that contains the most recent changes to the code. 
- The branch can diverge from the main branch to create a new branch.

What is gitignore? 
- A file or folder that is ignored by git. 
- This is a file or folder that is not tracked by git.
- This usally includes files that you do not want to commit to the repository.
- To make a file use the command 'touch .gitignore'. (You will need to remove all the files from staged by using 'git rm --cached -r .')
- To add files to the .gitignore file, just write the file name in the .gitignore file. (Find out more about .gitignore files.)

What is braching?
- Branching is the process of creating a new branch from an existing branch.
- You can create a new branch by using the command 'git branch name-branch'.
- To switch to a new branch, use the command 'git checkout name-branch'.
- To merge a branch into the main branch, use the command 'git merge name-branch'. 

What is forking and pull request?
- It is the process of creating a copy of a repository. This is not the same as cloning a repository. In other words, you are copying the repository.
- A pull request is a request to merge a branch into the main branch. This request is made by a person who has access to the repository but not to the branch (i.e this person only has Read-only access).
- 