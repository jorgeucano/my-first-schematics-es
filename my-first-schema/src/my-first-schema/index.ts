import { chain, mergeWith } from '@angular-devkit/schematics';
import { apply, filter, move, Rule, template, url, branchAndMerge } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { dasherize, classify} from "@angular-devkit/core/src/utils/strings";
import { schemaOptions } from './schema';

const stringUtils = {dasherize, classify};

function filterTemplates(options: schemaOptions): Rule {
  if (!options.service) {
    return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
  }
  return filter(path => !path.match(/\.bak$/));
}

export default function (options: schemaOptions): Rule {
    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? normalize(options.path) : options.path;
    
    const templateSource = apply(url('./files'), [
        filterTemplates(options),
        template({
            ...stringUtils,
            ...options
        }),
        move('src/app/my-schema')
      ]);
      
      return chain([
        branchAndMerge(chain([
          mergeWith(templateSource)
        ])),
      ]);

}