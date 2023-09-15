pwd -- print working directory (current directory)
cd -- change directory
ls -- list directory contents
mkdir -- make a new directory
touch -- create a new file
cp -- copy a file or directory
mv -- move a file or directory -- mv fromwhere towhere --
rm -- remove a file or directory
cat -- print the contents of a file
less -- view the contents of a file
head -- print the first lines of a file
tail -- print the last lines of a file
chmod -- change permissions of a file or directory
chmod 755 -- give read, write, and execute permissions to everyone -- chmod 755 file.txt
./ -- run a file (executable) -- ./file.txt
cat file.txt | wc -w -- count the number of words in a file
| -- pipe -- take the output of the command form the left(cat file.txt) and use it as input to the command on the right(wc -w) -- cat file.txt | wc -w
pipe -- file1.txt file2.txt | wc -w --> count the number of words in file1.txt and file2.txt
grep -- search for a pattern in a file -- grep "pattern" file.txt
grep -i -- ignore case -- grep -i "pattern" file.txt
grep -w -- match whole words -- grep -w "pattern" file.txt
pwd -- search for zip in the bin directory


git init -- initialize a git repository
git add -- add files to the staging area
git commit -- commit changes in the staging area
git restore -stage file.txt -- unstage a file
git status -- check the status of the repository
git commit -m "message" -- commit changes with a message
git push -- push changes to a remote repository
git checkout -B newbranchname -- create a new branch
git checkout branchname -- switch to a branch
git branch -- list branches
git branch branchname -- create a new branch without switching to it
git branch -d branchname -- delete a branch
git push -u origin branchname -- push a branch to a remote repository -- git push -u origin feature/lesson
git pull -- pull changes from a remote repository
git remote -- list remote repositories
git remote -v -- list remote repositories verbosely
git remote add origin https://github.com/emreaygener/meta-git-course-repo.git -- add a remote repository
git push origin main -- push changes to a remote repository
cat .git/refs/heads/main -- print the hash of the most recent commit
cat .git/HEAD -- Print the reference to the branch you are on
git head is a pointer to the branch you are on.
git diff HEAD Readme.md -- compare the working directory to the most recent commit
git diff asdfsadfkkmsd asdmlfmksdmk -- compare two commits
git log --pretty=oneline -- print the commit history every commit on a single line
git diff main feature/lesson -- compare two branches
git blame Readme.md -- print the commit history for each line of a file
git blame -L 1,5 Readme.md -- print the commit history for lines 1-5 of a file
git blame -l -- show the line numbers
git log -p jnsdhıfjksdf -- show the changes introduced by a commit with given id
forking -- create a copy of a repository under your own account -- fork the repo you want to contribute to from github,clone the repo to local machine and make the desired changes and git push -u origin test/forking-example to your forked repo, then create a pull request from your forked repo to the original repo.

//* exercise 1
mkdir lab
cd lab
touch file1.txt
mkdir dir1
mv file1.txt dir1/
touch file2.txt
mkdir -p dir2/dir3
mv file2.txt dir2/dir3/
cd dir2
touch file3.txt
mv file3.txt ../
cd ..
cd dir1
ls -l
total 4
-rw-r--r-- 1 coder coder 0 Aug 23 11:24 file1.txt
cd ../dir2
ls -l
total 4
drwxr-xr-x 2 coder coder 6144 Aug 23 11:27 dir3
cd dir3
ls -l
total 4
-rw-r--r-- 1 coder coder 0 Aug 23 11:25 file2.txt
ls
file2.txt
dir
file2.txt
cd ..
dir
dir3
cd /lab
bash: cd: /lab: No such file or directory
dir
dir3
cd ..
dir
dir1  dir2  file3.txt
pwd
/home/coder/project/lab
cd dir2
ls
dir3
//

//* exercise 2
emreaygener@LAPTOP-GII4VFP8:~/coursera$ pwd
/home/emreaygener/coursera
emreaygener@LAPTOP-GII4VFP8:~/coursera$ cat > input.txt
This is me adding some text from the keyboard!
emreaygener@LAPTOP-GII4VFP8:~/coursera$ cat < input.txt
This is me adding some text fro�m the keyboard!
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls
input.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls -l > output.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls
input.txt  output.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ less output.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ cat output.txt
total 4
-rw-r--r-- 1 emreaygener emreaygener 48 Aug 24 16:06 input.txt
-rw-r--r-- 1 emreaygener emreaygener  0 Aug 24 16:09 output.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls -l /bin/usr > error.txt
ls: cannot access '/bin/usr': No such file or directory
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls -l /bin/usr 2> error.txt
emreaygener@LAPTOP-GII4VFP8:~/coursera$ cat error.txt
ls: cannot access '/bin/usr': No such file or directory
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls -l /bin/usr > error_output.txt 2>&1
emreaygener@LAPTOP-GII4VFP8:~/coursera$ cat error_output.txt
ls: cannot access '/bin/usr': No such file or directory
emreaygener@LAPTOP-GII4VFP8:~/coursera$ ls
error.txt  error_output.txt  input.txt  output.txt
//