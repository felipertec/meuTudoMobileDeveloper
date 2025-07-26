import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description : chalk.yellow("Escolhe entre o tipo (1- Normal ou 2 Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha sempre entre 1 e 2")
    }
]

export default promptQRCode;