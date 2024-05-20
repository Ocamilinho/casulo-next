import Link from "next/link";


export default function Footer() {
	return (
		<>
			<footer className="flex items-center justify-between p-5 flex-row flex-wrap bg-rosa">
				<div className="comun">
					<ul className="list-none flex flex-row flex-nowrap gap-5">
						<li className="text-branco font-semibold"><Link href="/contato">Entre em contato</Link></li>
						<li className="text-branco font-semibold">Termos de uso</li>
						<li className="text-branco font-semibold">Politicas de privacidade</li>
					</ul>
				</div>
				<div className="flex items-center gap-4">

				</div>
			</footer>
		</>
	);
}