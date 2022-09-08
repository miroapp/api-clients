#!/usr/bin/env tsx
import {run} from '../generator/highlevelModelGenerator'
import {getModels} from '../generator/modelDefinition'

console.log(run(getModels()))
