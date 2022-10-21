interface WorkProps {
	data: IWorkData;
}

interface IWorkData {
	role: string;
	company: string;
	startDate: string;
	endDate: string;
	technologies: string[];
	description: string | React.ReactNode;
	link?: string;
}
