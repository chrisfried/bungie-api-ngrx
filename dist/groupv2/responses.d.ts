/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import {
  EntityActionResult,
  GroupApplicationResponse,
  GroupCreationResponse,
  GroupMemberLeaveResult,
  GroupMembershipSearchResponse,
  GroupOptionalConversation,
  GroupPotentialMembershipSearchResponse,
  GroupResponse,
  GroupSearchResponse,
  GroupTheme,
  GroupV2Card,
  SearchResultOfGroupBan,
  SearchResultOfGroupMember,
  SearchResultOfGroupMemberApplication
} from './interfaces';
import {
  PlatformErrorCodes
} from '../common';

export interface DictionaryOfint32AndstringServerResponse {
  Response?: { [key: number]: string }
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface ListOfGroupThemeServerResponse {
  Response?: GroupTheme[]
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface booleanServerResponse {
  Response?: boolean
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface ListOfGroupV2CardServerResponse {
  Response?: GroupV2Card[]
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupSearchResponseServerResponse {
  Response?: GroupSearchResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupResponseServerResponse {
  Response?: GroupResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface CEListOfGroupOptionalConversationServerResponse {
  Response?: GroupOptionalConversation[]
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupCreationResponseServerResponse {
  Response?: GroupCreationResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface SearchResultOfGroupMemberServerResponse {
  Response?: SearchResultOfGroupMember
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupMemberLeaveResultServerResponse {
  Response?: GroupMemberLeaveResult
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface SearchResultOfGroupBanServerResponse {
  Response?: SearchResultOfGroupBan
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupApplicationResponseServerResponse {
  Response?: GroupApplicationResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface SearchResultOfGroupMemberApplicationServerResponse {
  Response?: SearchResultOfGroupMemberApplication
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface ListOfEntityActionResultServerResponse {
  Response?: EntityActionResult[]
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupMembershipSearchResponseServerResponse {
  Response?: GroupMembershipSearchResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}

export interface GroupPotentialMembershipSearchResponseServerResponse {
  Response?: GroupPotentialMembershipSearchResponse
  ErrorCode?: PlatformErrorCodes
  ThrottleSeconds?: number
  ErrorStatus?: string
  Message?: string
  MessageData?: { [key: string]: string }
}