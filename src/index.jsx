import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

const queryStringToObj = (qStr) => {
  if (qStr.length < 1) return {};
  const qSplit = qStr.includes('&') ? qStr.split('&') : [qStr];
  return qSplit.reduce((acc, i) => ({ ...acc, [i.split('=')[0]]: i.split('=')[1] }), {});
};

const objToQueryString = (props) => Object.keys(props).reduce((acc, i) => `${acc.length < 1 ? '' : `${acc}&`}${i}=${props[i]}`, '');

const updateParams = (paramMap) => {
  history.replace({
    pathname: history.location.pathname,
    search: objToQueryString({ ...queryStringToObj(history.location.search.replace('?', '')), ...paramMap }),
  });
};

ReactDOM.render(
  <App
    initalState={queryStringToObj(history.location.search.replace('?', ''))}
    paramUpdater={updateParams}
  />,
  document.getElementById('appRoot'),
);
