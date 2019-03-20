import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Horario } from './Horario';
import '../App.css';

class SimpleSlider extends React.Component {
	state = {
		dia: 'viernes'
	};

	cambiaDia = (dia) => {
		this.setState({
			dia
		});
	};

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		let dia = this.state.dia;
		return (
			<div
				style={{
					maxWidth: '350px',
					margin: 'auto'
				}}
			>
				<Fragment>
					<br />
					<button
						className={`but ${dia === 'viernes' ? 'active' : ''}`}
						onClick={() => this.cambiaDia('viernes')}
					>
						Viernes
					</button>
					<button
						className={`but ${dia === 'sabado' ? 'active' : ''}`}
						onClick={() => this.cambiaDia('sabado')}
					>
						Sábado
					</button>
					<button
						className={`but ${dia === 'domingo' ? 'active' : ''}`}
						onClick={() => this.cambiaDia('domingo')}
					>
						Domingo
					</button>

					<Slider {...settings}>
						{[ '0', '1', '2', '3', '4', '5', '6', '7' ].map((v) => (
							<div key={v}>
								<Horario dia={dia} escenario={v} />
							</div>
						))}
					</Slider>
				</Fragment>
			</div>
		);
	}
}

export { SimpleSlider };
