import React from 'react';
import {renderToString} from 'react-dom/server';
import Routes from '../Routes';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';


export default (req, store) => {
    const content = renderToString(
        <Provider store= {store}>
        <StaticRouter location = {req} context = {{}}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
        </Provider>
    );
    return `
        <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="/public/bundle.js"></script>
        </body>
        </html>
    `;
};