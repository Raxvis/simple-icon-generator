import Editor from './Editor';
import React from 'react';

const app = () => (
	<div className="container">
		<nav>
			<ul>
				<li className="title">
					<a href="./">Simple Icon Generator</a>
				</li>
				<li className="right">
					Built by <a href="http://prefinem.com">Prefinem</a>
				</li>
			</ul>
		</nav>
		<Editor />
	</div>
);

export default app;