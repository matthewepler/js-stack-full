#js-stack-full  

based on the [tutorial and repo](https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/02-babel-es6-eslint-flow-jest-husky.md#readme) by verekia

##Installation Notes  
Standard linter style is used instead of AirBnb. Although Standard does not require a lint config file, you will still need to create one in order to get Flow and Babel working together. For more infor on Standard and installation instructions, go [here](https://github.com/standard/standard)

To get Flow/Standard to work together, you have to use Eslint binary instead of Standard to run linting. Create the `.eslint.json` file as directed in ch. 02 of the js-stack tutorial, but instead of "airbnb" in the "extends" object, put standard. You will also still need to install standard as instructed above.

##Usage Notes
If pushing right after a commit, you can skip the Husky test by using `git push --no-verify`

**Killing the production server**
`Ctrl-c` will kill the last command, which in the case of `pm2` is the `pm2 logs` command. To stop the server, run `yarn prod:stop`
