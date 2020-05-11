//git commit -m 
// git add
// git status

//git log
//git show
//git diff

//git restore
//git reset HEAD 

//git checkout -b <TenNhanh/atriibute> // create branch
// git checkout <branchName> //=> chuyen toi nhanh
//git branch // xem minh dang o nhanh nao
//chuyen ve nhanh A   git checkout <branchName>
//keo nhnah B ve A   git merge <branchName>
// git branch -D <Ten Nhanh> // xoa nhanh

// git reset --soft <to_commit>
// git reset --mixed <to_commit>
// git reset --hard <to_commit>

//git revert
// .gitignore

<=== GITHUB ===>
// git remote origin + url // tai github 
// google "gnome-keyring" "git ssh"

//git clone + url // B lấy repo của A trong team cố thể dùng để chỉnh sửa
//git pull // B đưa lên repo mới cho bên A

Pull request
// 1. git checkout -b <feature_branch>
// 2. git push origin <branch>
// 3. create a pull request on github
// 4. review code
    4.1 review code online (github)
    4.2 fetch branch into local to test offline(optional)
    4.3 approve the pull request
// 5. merge to master