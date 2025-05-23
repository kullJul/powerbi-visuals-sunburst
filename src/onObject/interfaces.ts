import powerbi from "powerbi-visuals-api";

import GroupFormattingModelReference = powerbi.visuals.GroupFormattingModelReference;
import FormattingId = powerbi.visuals.FormattingId;

export interface IFontReference extends GroupFormattingModelReference {
    fontFamily: FormattingId;
    bold: FormattingId;
    italic: FormattingId;
    underline: FormattingId;
    fontSize: FormattingId;
    color: FormattingId;
}

export interface ILegendReference extends IFontReference {
    show: FormattingId;
    showTitle: FormattingId;
    position: FormattingId;
    titleText: FormattingId;
}

export interface IColorReference extends GroupFormattingModelReference {
    fill: FormattingId;
}

export interface IDataLabelReference extends IFontReference {
    show: FormattingId;
}

export interface IValuesReference extends GroupFormattingModelReference {
    show: FormattingId,
    format: FormattingId;
}