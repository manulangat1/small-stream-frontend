


import React, { Fragment } from 'react'
import { CommonButtonTypes } from './Types';

export const CommonButton = ({ common, command, onClick, disabled }: CommonButtonTypes) => {
	return (
		<Fragment>

            <button 
                color="primary"
				// variant="contained"
				// fullWidth
				type="submit"
				disabled={disabled}
				onClick={onClick}
            >
                {command}
            </button>
			{/* <Button
				color="primary"
				variant="contained"
				fullWidth
				type="submit"
				disabled={disabled}
				onClick={onClick}
				className={`${classes.commonButton}  mt-4`}
			>
				{command}
			</Button> */}
		</Fragment>
	);
};

