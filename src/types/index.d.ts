import { UrlObject } from "url"

export type UrlType = UrlObject | string

export interface INavLink {
  label: string
  url: UrlType
}

export interface ISocialLinks {
  facebook?: string
  youtube?: string
  linkedin?: string
  instagram?: string
  twitter?: string
}

// ImageCard - Home Page
export interface IImageCard {
  img: UrlType
  excerpt: string[]
  projectLink: UrlType
}

// JobInfoArea - About Page
export interface IJobInfo {
  title: string
  timeline: string
  company: string
  bulletPoints: string[]
  img: UrlType
  excerpt: string
}
