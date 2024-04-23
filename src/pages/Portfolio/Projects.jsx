import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { PulseLoader } from "react-spinners";
import BankNET from "../../images/BankNET.jpg";
import Netify from "../../images/Netify.jpg";
import CVPage from "../../images/CV-Page.png";
import "./portfolio.css";

function Projects() {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const url = "https://api.github.com/users/bentonaw/repos";
	const projectImages = {
		BankNET: BankNET,
		Netify: Netify,
		"CV-Page": CVPage,
	};

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const projectNames = ["Netify", "BankNET", "CV-Page"];
				const filteredRepos = data.filter((repo) =>
					projectNames.includes(repo.name)
				);

				setRepos(filteredRepos);
				setIsLoading(false);

				// setTimeout(() => {
				// 	setRepos(filteredRepos);
				// 	setIsLoading(false);
				// }, 3000);
			});
	}, []);
	if (isLoading) {
		return (
			<>
				<PulseLoader color="#959595" margin={2} />
			</>
		);
	}
	return (
		<div>
			<h2 className="projectTitle">Projects</h2>
			<div className="projectCards">
				{repos.map((repo) => {
					return (
						<Card key={repo.id} style={{ width: "18rem" }}>
							<Card.Img variant="top" src={projectImages[repo.name]} />
							<Card.Body>
								<Card.Title>
									<h3>Project:</h3>
									<p>{repo.name}</p>
								</Card.Title>
								<Card.Text>
									<h4>Languages:</h4>
									{repo.language ? <p>{repo.language}</p> : <p>C#</p>}
								</Card.Text>
								<Button variant="warning">
									<Card.Link href={repo.html_url}>github</Card.Link>
								</Button>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
