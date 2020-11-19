import Client from '@/components/client/Client'

export default [
	{
		path: '/client:uuid',
		name: 'client',
		component: Client,
		props: { uuid: '' }
	}
]