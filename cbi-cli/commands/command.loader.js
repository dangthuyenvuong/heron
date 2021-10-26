import { GenerateCommand } from './generate.command.js'
import { ERROR_PREFIX } from '../lib/ui/index.js'
import { GenerateAction, CreateProjectAction } from '../actions/index.js'
import { CreateProjectCommand } from './create-project.command.js'

export class CommandLoader {
    static load(program) {
        new GenerateCommand(new GenerateAction()).load(program)
        new CreateProjectCommand(new CreateProjectAction()).load(program)
        this.handleInvalidCommand(program);
    }

    static handleInvalidCommand(program) {
        program.on('command:*', () => {
            console.error(`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`, program.args.join(' '));
            console.log(`See ${chalk.red('--help')} for a list of available commands.\n`);
            process.exit(1);
        });
    }
}

