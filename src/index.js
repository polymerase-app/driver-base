/**
* @package polymerase-driver-aws-apigateway
* @copyright 2015 Andrew Munsell <andrew@wizardapps.net>
*/

import {Promise} from 'bluebird';
import {dependencies} from 'needlepoint';

export default class BaseDriver {
	/**
	* Set the service manifest as the context for the driver.
	* @param {object} serviceContext
	*/
	setServiceContext(serviceContext) {
		this.context = serviceContext;
	}
}
