import Code from '@components/Code';
import Window from '@components/Window';
import Feats from '@components/Feats';
import style from './index.css';

export default function () {
	return (
		<div>
			<Window />

			<Feats />

			<section class={ style.section }>
				<h2>Installation</h2>
				<Code text="npm install --global @pwa/cli" />
				<Code offset label="OR" text="yarn global add @pwa/cli" />
			</section>

			<section class={ style.section }>
				<h2>Commands</h2>
				<Code label="Scaffold a new project!" text="pwa init" />
				<Code label="Run development/live-reload server" text="pwa watch" />
				<Code label="Build production bundle(s)" text="pwa build" />
				<Code label="Generate static HTML exports" text="pwa export" />
			</section>
		</div>
	);
}
