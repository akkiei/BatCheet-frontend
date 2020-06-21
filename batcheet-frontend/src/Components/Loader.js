import React from 'react';

function Loader(props) {
	if (props.Loader === true) {
		return (
			<div className="ui">
				<div className="ui active inline dimmer">
					<div className="ui active centered inline loader">Loading</div>
				</div>
			</div>
		);
    }
    else
        return <div></div>
}

export default Loader;
