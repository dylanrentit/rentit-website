# GitHub Setup Commands

## After creating your repository on GitHub, run these commands:

```bash
# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/rentit-website.git

# Push to GitHub
git push -u origin main
```

## Alternative: If you prefer SSH (after setting up SSH keys)
```bash
# Add GitHub remote with SSH
git remote add origin git@github.com:YOUR_USERNAME/rentit-website.git

# Push to GitHub
git push -u origin main
```

## To verify connection:
```bash
# Check remote URL
git remote -v

# Check repository status
git status
```

## If you need to change the remote URL later:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
```

## Repository Suggestions:
- **Name**: `rentit-website` or `rentit-business-portal`
- **Description**: `RentIt rental platform website with business file upload functionality`
- **Visibility**: Choose based on your needs (Private recommended for business projects)

## What's Ready to Push:
✅ Complete React frontend with Tailwind CSS
✅ Business file upload functionality with EmailJS
✅ Gmail auto-flagging setup
✅ Documentation and setup guides
✅ Proper .gitignore for security
✅ Professional commit history