
# Start

yarn add react react-dom redux react-router history react-redux react-router-dom connected-react-router

## redux Observable

yarn add redux-thunk rxjs redux-observable redux-logger 
yarn add react react-dom redux react-router history react-redux react-router-dom connected-react-router

## IMMUTABLE

yarn add immutable redux-immutable

update remove branch list

- git remote update origin --prune

search commit in branch
 git branch --contains <commit>

in remots allso
 git branch -r --contains <commit>

reset last commit
 git reset --hard HEAD~1

 delete remove branch
 - git push origin :feature/hooks

 get last commit stat
 - git show --stat
 -git show <commit> --stat

 add ips

 const URL_RESOURCE_NAME = {
    LOCAL: 'localhost:51819/',
    TEST: `${API_IP.POINTER}/fleet.core.api/`,
    DEV: `${API_IP.DEVALORE}/fleet.core.api/`,
    DEV2: 'ptl-dev-web01.pointerbi.com/fleetcore.api/',
    QA: 'pointerqa-web02.pointerbi.com/fleetcore.api/',
    QA2: '62.0.95.30/fleetcore.api/',
    PROD: `${API_IP.POINTER}/fleet.core.api/`,
    MOCK: `${API_IP.MOCK}/`,
    STAGING: 'webqa-staging01.pointerbi.com/fleetcore.api/'
};