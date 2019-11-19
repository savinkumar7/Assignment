import {configure} from '@storybook/react';

import requireContext from 'require-context.macro';

const req = requireContext('../src/client', true, /\.stories\.js$/);

function loadStories(){
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);