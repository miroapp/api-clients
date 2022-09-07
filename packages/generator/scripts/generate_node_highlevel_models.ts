#!/usr/bin/env tsx
import {run} from '../highlevelModelGenerator'
import {getModels} from '../modelDefinition'

console.log(run(getModels()))
