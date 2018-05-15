import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { Sample_Mission_1 } from './posts';
import { Sample_Mission_2 } from './users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={Sample_Mission_1} />
	<Resource name="users" list={Sample_Mission_2} />
    </Admin>
);

export default App;
