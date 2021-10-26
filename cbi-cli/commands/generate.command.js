import chalk from "chalk"
import Table from "cli-table3"
import { CbiCollection } from "../lib/schematics/index.js";
import { AbstractCommand } from './abstract.command.js'


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export class GenerateCommand extends AbstractCommand {
    load(program) {
        program
            .command('generate <schematic> [name] [path]')
            .alias('g')
            .description(this.buildDescription())
            // .option('')
            .action((schematic, name, path, command) => __awaiter(this, void 0, void 0, function* () {
                // console.log(schematic, name, path, command)
                const options = [];


                const inputs = [];
                inputs.push({ name: 'schematic', value: schematic });
                inputs.push({ name: 'name', value: name });
                inputs.push({ name: 'path', value: path });
                yield this.action.handle({
                    type: schematic,
                    name,
                    path
                }, options);
            }))
    }

    buildDescription() {
        return ('Generate a React element.\n' +
            '  Available schematics:\n' +
            this.buildSchematicsListAsTable());
    }

    buildSchematicsListAsTable() {
        const leftMargin = '    ';
        const tableConfig = {
            head: ['name', 'alias', 'description'],
            chars: {
                'left': leftMargin.concat('│'),
                'top-left': leftMargin.concat('┌'),
                'bottom-left': leftMargin.concat('└'),
                'mid': '',
                'left-mid': '',
                'mid-mid': '',
                'right-mid': '',
            },
        };
        const table = new Table(tableConfig);
        for (const schematic of CbiCollection.getSchematics()) {
            table.push([
                chalk.green(schematic.name),
                chalk.cyan(schematic.alias),
                schematic.description,
            ]);
        }

        return table.toString();
    }
}