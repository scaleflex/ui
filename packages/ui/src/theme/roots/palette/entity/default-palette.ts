/* eslint-disable sonarjs/no-duplicate-string */
import { Color } from '../../../../utils/types/palette';
import type { ColorsMap } from './colors-map';

export const lightPalette = {
  // Text
  [Color.TextPrimary]: 'rgba(55, 65, 75, 1)', // #37414B
  [Color.TextSecondary]: 'rgba(118, 138, 159, 1)', // #768184
  [Color.TextSecondaryInvert]: 'rgba(213, 216, 220, 1)', // #D5D8DC
  [Color.TextPlaceholder]: 'rgba(169, 182, 194, 1)', // #A9B6C2
  [Color.TextWarning]: 'rgba(196, 110, 0, 1)', // #768184
  [Color.TextError]: 'rgba(185, 33, 46, 1)', // #B9212E
  [Color.TextInfo]: 'rgba(35, 117, 171, 1)', // #2375AB

  // Accent
  [Color.AccentPrimary]: 'rgba(104, 121, 235, 1)', // #6879EB
  [Color.AccentPrimaryHover]: 'rgba(96, 111, 209, 1)', // #606FD1
  [Color.AccentPrimaryActive]: 'rgba(73, 88, 188, 1)', // #4958BC
  [Color.AccentPrimaryDisabled]: 'rgba(233, 238, 242, 1)', // #E9EEF2
  [Color.AccentSecondaryDisabled]: '#F9FBFC',
  [Color.AccentStateless]: 'rgba(104, 121, 235, 1)', // #6879EB
  [Color.AccentStateless_0_4_Opacity]: 'rgba(104, 121, 235, 0.4)',
  [Color.Accent_0_5_5_Opacity]: 'rgba(96, 111, 209, 0.55)', // #606FD18C
  [Color.Accent_0_5_Opacity]: 'rgba(104, 121, 235, 0.05)', // #6879EB0D
  [Color.Accent_1_2_Opacity]: 'rgba(104, 121, 235, 0.12)', // #6879eb1f
  [Color.Accent_1_8_Opacity]: 'rgba(104, 121, 235, 0.18)', // #6879EB2E
  [Color.Accent_2_8_Opacity]: 'rgba(104, 121, 235, 0.28)', // #6879EB47
  [Color.Accent_4_0_Opacity]: 'rgba(104, 121, 235, 0.4)', // #6879EB66

  [Color.BackgroundGrey]: 'rgba(216, 224, 232, 1)', // #D8E0E8
  [Color.BackgroundStateless]: 'rgba(255, 255, 255, 1)', // #FFFFFF
  [Color.BackgroundActive]: 'rgba(243, 247, 250, 1)', // #F3F7FA
  [Color.BackgroundBaseLight]: 'rgba(235, 239, 252, 1)', // #EBEFFC
  [Color.BackgroundBaseMedium]: 'rgba(227, 231, 251, 1)', // #E3E7FB
  [Color.BackgroundPrimary]: 'rgba(248, 250, 251, 1)', // #f8fafb
  [Color.BackgroundPrimaryLight]: 'rgba(243, 245, 247, 1)', // ##F3F5F7
  [Color.BackgroundPrimaryHover]: 'rgba(239, 243, 246, 1)', // #eff3f6
  [Color.BackgroundPrimaryActive]: 'rgba(93, 109, 126, 1)', // #5d6d7e
  [Color.BackgroundPrimary_0_5_Opacity]: 'rgba(255, 255, 255, 0.500)',
  [Color.BackgroundPrimaryStateless]: '#CCD6DE',
  [Color.BackgroundSecondary]: 'rgba(255, 255, 255, 1)',
  [Color.BackgroundHover]: 'rgba(249, 251, 252, 1)', // #F9FBFC
  [Color.BackgroundGreen]: 'rgba(237, 250, 244, 1)',
  [Color.BackgroundGreenMedium]: 'rgba(227, 250, 239, 1)', // #E3FAEF
  [Color.BackgroundBlue]: 'rgba(244, 249, 255, 1)', // #F4F9FF
  [Color.BackgroundRed]: 'rgba(253, 244, 242, 1)', // #FDF4F2
  [Color.BackgroundRedLight]: 'rgba(255, 245, 245, 1)', // #FFF5F5
  [Color.BackgroundRedMedium]: 'rgba(247, 228, 230, 1)', // #F7E4E6
  [Color.BackgroundOrange]: 'rgba(255, 249, 242, 1)', // #FFF9F2
  [Color.BackgroundTooltip]: 'rgba(79, 98, 118, 1)', // #4F6276

  [Color.IconsPrimary]: 'rgba(118, 138, 159, 1)', // #768A9F
  [Color.IconsPrimaryOpacity_0_6]: 'rgba(93, 109, 126, 0.600)',
  [Color.IconsSecondary]: 'rgba(151, 166, 182, 1)', // #97A6B6
  [Color.IconsPlaceholder]: 'rgba(223, 231, 237, 1)', // #DFE7ED
  [Color.IconsInvert]: 'rgba(255, 255, 255, 1)', // #ffffff
  [Color.IconsMuted]: 'rgba(169, 182, 194, 1)', // #A9B6C2
  [Color.IconsPrimaryHover]: 'rgba(79, 98, 118, 1)', // #4F6276
  [Color.IconsSecondaryHover]: 'rgba(118, 138, 159, 1)', // #768A9F

  [Color.ButtonPrimaryText]: 'rgba(255, 255, 255, 1)', // #FFFFFF
  [Color.ButtonPrimaryText_0_6]: 'rgba(255, 255, 255, 0.6)', // #FFFFFF 60%
  [Color.ButtonPrimaryText_0_4]: 'rgba(255, 255, 255, 0.4)', // #FFFFFF 40%
  [Color.ButtonDisabledText]: 'rgba(169, 182, 194, 1)', // #A9B6C2
  [Color.ButtonSecondaryText]: 'rgba(0, 0, 0, 1)', // #000000

  // Link
  [Color.LinkPrimary]: 'rgba(118, 138, 159, 1)', // #768A9F
  [Color.LinkStateless]: 'rgba(118, 138, 159, 1)', // #768A9F
  [Color.LinkHover]: 'rgba(79, 98, 118, 1)', // #4F6276
  [Color.LinkActive]: 'rgba(55, 65, 75, 1)', // #37414B
  [Color.LinkPressed]: 'rgba(104, 121, 235, 1)', // #6879EB
  [Color.LinkMuted]: 'rgba(169, 182, 194, 1)', // #A9B6C2

  [Color.BordersPrimary]: 'rgba(204, 214, 222, 1)', // #CCD6DE
  [Color.BordersPrimaryHover]: 'rgba(104, 118, 134, 1)', // #687686
  [Color.BordersSecondary]: 'rgba(236, 240, 243, 1)', // #ECF0F3
  [Color.BordersStrong]: 'rgba(204, 214, 222, 1)', // #CCD6DE
  [Color.BordersInvert]: 'rgba(85, 99, 115, 1)', // #556373
  [Color.BorderHoverBottom]: 'rgba(104, 121, 235, 0.18)',
  [Color.BorderActiveBottom]: '#4958BC',
  [Color.BorderPrimaryStateless]: 'rgba(204, 214, 222, 1)', // #CCD6DE
  [Color.BordersDisabled]: 'rgba(73, 88, 188, 0.4)', // #4958BC66
  [Color.BordersButton]: 'rgba(151, 166, 182, 1)', // #97A6B6
  [Color.BordersItem]: 'rgba(226, 232, 236, 1)', // #E2E8EC
  [Color.BordersBaseLight]: 'rgba(211, 219, 250, 1)', // #D3DBFA
  [Color.BordersBaseMedium]: 'rgba(164, 175, 227, 1)', // #A4AFE3
  [Color.BordersGreen]: 'rgba(27, 161, 99, 0.22)', // #1BA163 22%
  [Color.BordersGreenMedium]: 'rgba(27, 161, 99, 0.4)', // #1BA163 40%
  [Color.BordersRed]: 'rgba(185, 33, 46, 0.4)', // #B9212E 40%

  [Color.ActiveSecondary]: '#FFFFFF',
  [Color.ActiveSecondaryHover]: 'rgba(104, 121, 235, 0.05)', // #6879eb0d

  // states
  [Color.Error]: 'rgba(246, 61, 61, 1)', // #F63D3D
  [Color.Error_0_28_Opacity]: 'rgba(185, 33, 46, 0.28)', // #B9212E47
  [Color.Error_0_12_Opacity]: 'rgba(255, 86, 78, 0.1)', // #FF564E1A
  [Color.ErrorHover]: 'rgba(216, 46, 46, 1)', // #D82E2E
  [Color.ErrorActive]: 'rgba(185, 33, 46, 1)', // #B9212E
  [Color.Success]: 'rgba(38, 193, 122, 1)', // #26C17A
  [Color.SuccessHover]: 'rgba(30, 154, 98, 1)', // #1E9A62
  [Color.SuccessActive]: 'rgba(23, 116, 73, 1)', // #177449
  [Color.Warning]: 'rgba(255, 172, 74, 1)', // #FFAC4A
  [Color.WarningHover]: 'rgba(237, 145, 7, 1)', // #ED9107
  [Color.WarningActive]: 'rgba(224, 135, 0, 1)', // #E08700
  [Color.Info]: 'rgba(41, 127, 184, 1)', // #297FB8
  [Color.Modified]: 'rgba(165, 166, 246, 1)', // #A5A6F6

  // flat colors
  [Color.Red]: 'rgba(219, 46, 50, 1)', // #EB4D4B
  [Color.Orange]: 'rgba(255, 168, 0, 1)', // #FFA800
  [Color.Salad]: 'rgba(143, 176, 33, 1)', // #8FB021
  [Color.Green]: 'rgba(22, 160, 134, 1)', // #16A086
  [Color.Blue]: 'rgba(41, 127, 184, 1)', // #297FB8
  [Color.Indigo]: 'rgba(91, 72, 162, 1)', // #5B48A2
  [Color.Violet]: 'rgba(141, 68, 173, 1)', // #8D44AD
  [Color.Pink]: 'rgba(211, 92, 158, 1)', // #D35C9E

  // Extra
  [Color.GradientRight]:
    'linear-gradient(270deg, #FFFFFF 1.56%, rgba(255, 255, 255, 0.89) 52.4%, rgba(255, 255, 255, 0.532165) 76.04%, rgba(255, 255, 255, 0) 100%)',
  [Color.Extra_0_3_Overlay]: 'rgba(79, 98, 118, 0.3)', // #4F62764D
  [Color.GradientRightActive]:
    'linear-gradient(270deg, #F3F7FA 1.56%, #F3F7FA 52.4%, rgba(243, 247, 250, 0.53) 76.04%, rgba(243, 247, 250, 0) 100%)',
  [Color.GradientRightHover]:
    'linear-gradient(270deg, #F9FBFC 1.56%, #F9FBFC 52.4%, rgba(249, 251, 252, 0.53) 76.04%, rgba(249, 251, 252, 0) 100%)',
  [Color.Extra_0_5_Overlay]: 'rgba(79, 98, 118, 0.5)', // #4F627680
  [Color.Extra_0_7_Overlay]: 'rgba(79, 98, 118, 0.7)', // #4F6276B2
  [Color.Extra_0_9_Overlay]: 'rgba(79, 98, 118, 0.9)', // #4F6276E5
  [Color.Red_0_1_Overlay]: 'rgba(232, 91, 70, 0.1)', // #E85B461A
  [Color.Orange_0_1_Overlay]: 'rgba(250, 157, 47, 0.1)', // #FA9D2F1A
  [Color.Accent_0_8_Overlay]: 'rgba(104, 121, 235, 0.08)', // #6879EB14
  [Color.Green_0_2_Overlay]: 'rgba(27, 161, 99, 0.2)', // #16A086

  // Uploader
  [Color.Link]: 'rgba(250, 166, 68, 1)', // #FAA644
  [Color.Camera]: 'rgba(73, 186, 224, 1)', // #49BAE0
  [Color.GoogleDrive]: 'rgba(81, 136, 238, 1)', // #5188EE
  [Color.Dropbox]: 'rgba(17, 40, 124, 1)', // #11287C
  [Color.OneDrive]: 'rgba(40, 100, 186, 1)', // #2864BA
  [Color.Device]: 'rgba(102, 73, 209, 1)', // #6649D1
  [Color.Instagram]: 'rgba(244, 70, 154, 1)', // #F4469A
  [Color.Unsplash]: 'rgba(173, 38, 220, 1)', // #AD26DC
  [Color.FreeImages]: 'rgba(16, 163, 135, 1)', // #10A387
  [Color.FreeIcons]: 'rgba(62, 207, 139, 1)', // #3ECF8B
  [Color.Canvas]: 'rgba(36, 190, 202, 1)', // #24BECA
  [Color.Box]: 'rgba(0, 97, 213, 1)', // #0061D5
  [Color.ScreenCast]: 'rgba(48, 61, 78, 1)', // #303D4E

  // others
  [Color.Tag]: '#889AAC',
  [Color.StatesErrorDisabledText]: 'rgba(185, 33, 46, 0.3)',
  [Color.LightShadow]: 'rgba(146, 166, 188, 0.2)', // #4d4e4e40
  [Color.MediumShadow]: 'rgba(146, 166, 188, 0.24)',
  [Color.LargeShadow]: 'rgba(146, 166, 188, 0.32)',
  [Color.XLargeShadow]: 'rgba(146, 166, 188, 0.5)',
};

export const defaultPalette: ColorsMap = lightPalette;
