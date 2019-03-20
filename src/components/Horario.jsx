//@ts-check
import React, { Component, Fragment } from 'react';
import escenarios from '../data/escenarios';
import data from '../data/data';

class Horario extends Component {
	render() {
		let { escenario, dia } = this.props;
		let d = data[dia]
			.sort(function(a, b) {
				//@ts-ignore
				return new Date(a.inicio) - new Date(b.inicio);
			})
			.filter((v) => v.escenario === escenario);
		return (
			<Fragment>
				<h1>
					{+escenario + 1}. {escenarios.escenarios[escenario]}
				</h1>
				{d.map((ev) => {
					return (
						<div key={ev.banda}>
							<h1>{ev.banda}</h1>
							<h2>
								inicio:{' '}
								{new Date(ev.inicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
							</h2>
							<h2>
								fin: {new Date(ev.fin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
							</h2>
							<br />
						</div>
					);
				})}
			</Fragment>
		);
	}
}

export { Horario };
