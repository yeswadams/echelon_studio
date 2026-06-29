import {agent} from './agent'
import {amenity} from './ammenity'
import {developer} from './developer'
import {faq} from './faq'
import {feature} from './feature'
import {location} from './location'
import {nearbyPlace} from './nearbyPlace'
import {postType} from './postType'
import {property} from './property'
import {propertyUnit} from './propertyUnit'
import {tag} from './tag'

export const schemaTypes = [
  // Core listing documents
  property,
  propertyUnit,

  // People & organisations
  agent,
  developer,

  // Taxonomy & lookup documents
  amenity,
  feature,
  location,
  nearbyPlace,
  tag,

  // Content documents
  faq,
  postType,
]
