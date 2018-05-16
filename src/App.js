import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { Sample_Mission_1 } from './sample_mission_1';
import { Sample_Mission_2 } from './sample_mission_2';
import { Sample_Mission_3 } from './sample_mission_3';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:3000')} title="Mission Critical Components">
    	<Resource name="sample_mission_1" list={Sample_Mission_1} />
	<Resource name="sample_mission_2" list={Sample_Mission_2} />
	<Resource name="sample_mission_3" list={Sample_Mission_3} />
    </Admin>
);

export default App;
