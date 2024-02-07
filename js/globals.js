const KEYS = { W: 87,
 S: 83,
 A: 65,
 D: 68,

 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39,

 SPACE: 32,

}

const sprites = {}

const cnv = document.querySelector('#c')

//#region Patch #1 
// FIXES: #1

const GITHUB_HOSTNAME = 'darsh-agrawal71.github.io';
const GITHUB_ROOT_PREFIX = 'mars-game';
const SLASH = '/';

function isRunningOnGithub(host=window.location.hostname) {
    return GITHUB_HOSTNAME === host;
}

function convertFSResLinkToGithubResLink(fsLink) {
    if (!isRunningOnGithub()) return fsLink; // Not running on github 🤷‍♂️
    let result = GITHUB_HOSTNAME + GITHUB_ROOT_PREFIX;
    if (fsLink.at(0) !== SLASH) { // Add a slash
       result += SLASH;
    }
    
    result += fsLink;
    
    return result;
    
    // Contributed by Darsh ❤️ 
    // (techically I wrote the whole project but still 🤷‍♂️ 
}

//#endregion

// BEAUTIFY: Clean exports into one area.

export {
    KEYS,
    sprites,
    cnv,
    
    GITHUB_HOSTNAME,
    GITHUB_ROOT_PREFIX,
    SLASH,
    isRunningOnGithub,
    convertFSResLinkToGithubResLink
};
