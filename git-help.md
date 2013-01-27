Git Help
--------

Create new Git repository

	git init

Add files to git repository

	git add .

Ask for git status
	
	git status

commit to git repo

	git commit -m "First Commit"

Bind to gitlab repo

	git remote add origin git@gitlab.com:boy-test.git

Push to git repo

	git push origin master


	mkdir example
	cd example
	git init
	touch README
	git add README
	git commit -m 'first commit'
	git remote add origin git@gitlab.com:artitsaenchompu/example.git
	git push -u origin master

	cd existing_git_repo
	git remote add origin git@gitlab.com:artitsaenchompu/example.git
	git push -u origin master