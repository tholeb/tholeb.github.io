const data: IWorkData[] = [
	{
		role: 'Student',
		company: 'IUT de Nantes',
		startDate: '2020',
		endDate: '2022',
		technologies: [
			'Java',
			'OOP',
			'C',
			'js',
			'HTML/CSS',
			'OracleSQL',
			'UML',
			'Python',
		],
		description: (
			<>
				Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
				ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
				ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
				nisl consectetur et.
			</>
		),
	},
	{
		role: 'Intern',
		company: "CNAM d'Angers (DASIPH)",
		startDate: 'April 2022',
		endDate: 'June 2022',
		technologies: ['Redfish', 'Ansible', 'Cockpit', 'Rundeck', 'iDrac 7/8'],
		description: (
			<>
				My internship took place at the CNAM of Angers in the Architecture
				Division of Infrastructure Services and Hosting Management (ADISHM) from
				April 11, to June 17. My manager is Franck GADIN, and my supervisor is
				Jean-Marc BADOUAL. I have been entrusted with two projects:
				<ul>
					<li>
						the first one consists in automating the server&apos;s hardware
						configuration (BIOS) using the Redfish standard in order to make
						the constructor agnostic
					</li>
					<li>
						The second project consists in finding an IT HMI (Human Machine
						Interface) allowing access to local data (logs, metrics, ...), and
						also perform level 1 maintenance operations (service
						start/restart, …)
					</li>
				</ul>
				The first week, I mainly documented myself about the servers
				infrastructure, HMI, and redfish. Then I started experimenting with
				Redfish&apos;s REST API on a DELL T130. For several weeks, I tried
				changing the config, but in vain. At the same time, I looked for multiple
				HMI similar to Webmin, Sentora or Cockpit, and I tried to install them on
				a server. In the end, only Cockpit was selected since it best met the
				needs of the NHIF (National Health Insurance Fund : CNAM), so I had to
				install it, configure it, integrate it into the server’s deployment
				playbook, and authorize SSO connections. Also, I had to interview multiple
				organisms likely to use this HMI in order to have feedback on the use of
				the AMBox and to present the tool.
			</>
		),
	},
];

export default data;
