import type { Schema, Attribute } from '@strapi/strapi';

export interface AnalysisAnalysis extends Schema.Component {
  collectionName: 'components_analysis_analyses';
  info: {
    displayName: 'Analysis';
    description: '';
  };
  attributes: {
    Analysis: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    Element: Attribute.RichText & Attribute.Required;
  };
}

export interface SubtitleSubtitle extends Schema.Component {
  collectionName: 'components_subtitle_subtitles';
  info: {
    displayName: 'Subtitle';
    description: '';
  };
  attributes: {
    Subtitle: Attribute.String & Attribute.Required;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'analysis.analysis': AnalysisAnalysis;
      'list.list': ListList;
      'subtitle.subtitle': SubtitleSubtitle;
      'text.text': TextText;
    }
  }
}
