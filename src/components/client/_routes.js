import Client from '@/components/client/Client'

export default [
	{
		path: '/client',
		name: 'client',
		component: Client,
		props: { uuid: '' }
	}
]