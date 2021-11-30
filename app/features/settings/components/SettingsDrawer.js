// @flow

import FieldText from '@atlaskit/field-text';
import ArrowLeft from '@atlaskit/icon/glyph/arrow-left';
import { AkCustomDrawer } from '@atlaskit/navigation';
import { SpotlightTarget } from '@atlaskit/onboarding';
import Panel from '@atlaskit/panel';

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { compose } from 'redux';

import { closeDrawer, DrawerContainer, Logo } from '../../navbar';
import { Onboarding, advenaceSettingsSteps, startOnboarding } from '../../onboarding';
import { Form, SettingsContainer, TogglesContainer } from '../styled';
import {
    setEmail, setName, setWindowAlwaysOnTop, setAppId,
    setStartWithAudioMuted, setStartWithVideoMuted, setDisableAGC, setAppSecret, setAvatar, setHost
} from '../actions';

import SettingToggle from './SettingToggle';
import ServerURLField from './ServerURLField';
import ServerTimeoutField from './ServerTimeoutField';

type Props = {

    /**
     * Redux dispatch.
     */
    dispatch: Dispatch<*>;

    /**
     * Is the drawer open or not.
     */
    isOpen: boolean;

    /**
     * Email of the user.
     */
    _email: string;
    /**
     * AppId for token
     */
    _appId:string;
    /**
     * AppSecret for token
     */
    _appSecret:string;
    /**
     * avatar of the user
     */
    _avatar:string;
    /**
     * ServerHost
     */
    _host:string;

    /**
     * Whether onboarding is active or not.
     */
    _isOnboardingAdvancedSettings: boolean,

    /**
     * Name of the user.
     */
    _name: string;

    /**
     * I18next translation function.
     */
    t: Function;
};

/**
 * Drawer that open when SettingsAction is clicked.
 */
class SettingsDrawer extends Component<Props, *> {
    /**
     * Initializes a new {@code SettingsDrawer} instance.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this._onBackButton = this._onBackButton.bind(this);
        this._onEmailBlur = this._onEmailBlur.bind(this);
        this._onEmailFormSubmit = this._onEmailFormSubmit.bind(this);
        this._onNameBlur = this._onNameBlur.bind(this);
        this._onNameFormSubmit = this._onNameFormSubmit.bind(this);

        this._onAppIdBlur = this._onAppIdBlur.bind(this);
        this._onAppIdFormSubmit = this._onAppIdFormSubmit.bind(this);

        this._onAppSecretBlur = this._onAppSecretBlur.bind(this);
        this._onAppSecretFormSubmit = this._onAppSecretFormSubmit.bind(this);

        this._onAvatarBlur = this._onAvatarBlur.bind(this);
        this._onAvatarFormSubmit = this._onAvatarFormSubmit.bind(this);

        this._onHostBlur = this._onHostBlur.bind(this);
        this._onHostFormSubmit = this._onHostFormSubmit.bind(this);
    }

    /**
     * Start Onboarding once component is mounted.
     *
     * NOTE: It automatically checks if the onboarding is shown or not.
     *
     * @param {Props} prevProps - Props before component updated.
     * @returns {void}
     */
    componentDidUpdate(prevProps: Props) {
        if (!prevProps.isOpen && this.props.isOpen) {

            // TODO - Find a better way for this.
            // Delay for 300ms to let drawer open.
            setTimeout(() => {
                this.props.dispatch(startOnboarding('settings-drawer'));
            }, 300);
        }
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;

        return (
            <AkCustomDrawer
                backIcon = { <ArrowLeft label = { t('settings.back') } /> }
                isOpen = { this.props.isOpen }
                onBackButton = { this._onBackButton }
                primaryIcon = { <Logo /> } >
                <DrawerContainer>
                    <SettingsContainer>
                        <SpotlightTarget
                            name = 'name-setting'>
                            <Form onSubmit = { this._onNameFormSubmit }>
                                <FieldText
                                    label = { t('settings.name') }
                                    onBlur = { this._onNameBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._name } />
                            </Form>
                        </SpotlightTarget>
                        <SpotlightTarget
                            name = 'email-setting'>
                            <Form onSubmit = { this._onEmailFormSubmit }>
                                <FieldText
                                    label = { t('settings.email') }
                                    onBlur = { this._onEmailBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._email } />
                            </Form>
                        </SpotlightTarget>
                        <SpotlightTarget
                            name = 'user-avatar'>
                            <Form onSubmit = { this._onAvatarFormSubmit }>
                                <FieldText
                                    label = { t('settings.avatar') }
                                    onBlur = { this._onAvatarBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._avatar } />
                            </Form>
                        </SpotlightTarget>
                        <SpotlightTarget
                            name = 'app-id'>
                            <Form onSubmit = { this._onAppIdFormSubmit }>
                                <FieldText
                                    label = { t('settings.appId') }
                                    onBlur = { this._onAppIdBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._appId } />
                            </Form>
                        </SpotlightTarget>
                        <SpotlightTarget
                            name = 'app-key'>
                            <Form onSubmit = { this._onAppSecretFormSubmit }>
                                <FieldText
                                    label = { t('settings.appKey') }
                                    onBlur = { this._onAppSecretBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._appSecret } />
                            </Form>
                        </SpotlightTarget>
                        <SpotlightTarget
                            name = 'app-host'>
                            <Form onSubmit = { this._onHostFormSubmit }>
                                <FieldText
                                    label = { t('settings.appHost') }
                                    onBlur = { this._onHostBlur }
                                    shouldFitContainer = { true }
                                    type = 'text'
                                    value = { this.props._host } />
                            </Form>
                        </SpotlightTarget>
                        <TogglesContainer>
                            <SpotlightTarget
                                name = 'start-muted-toggles'>
                                <SettingToggle
                                    label = { t('settings.startWithAudioMuted') }
                                    settingChangeEvent = { setStartWithAudioMuted }
                                    settingName = 'startWithAudioMuted' />
                                <SettingToggle
                                    label = { t('settings.startWithVideoMuted') }
                                    settingChangeEvent = { setStartWithVideoMuted }
                                    settingName = 'startWithVideoMuted' />
                            </SpotlightTarget>
                        </TogglesContainer>
                        <Panel
                            header = { t('settings.advancedSettings') }
                            isDefaultExpanded = { this.props._isOnboardingAdvancedSettings }>
                            <SpotlightTarget name = 'server-setting'>
                                <ServerURLField />
                            </SpotlightTarget>
                            <SpotlightTarget name = 'server-timeout'>
                                <ServerTimeoutField />
                            </SpotlightTarget>
                            <TogglesContainer>
                                <SpotlightTarget
                                    name = 'always-on-top-window'>
                                    <SettingToggle
                                        label = { t('settings.alwaysOnTopWindow') }
                                        settingChangeEvent = { setWindowAlwaysOnTop }
                                        settingName = 'alwaysOnTopWindowEnabled' />
                                </SpotlightTarget>
                                <SettingToggle
                                    label = { t('settings.disableAGC') }
                                    settingChangeEvent = { setDisableAGC }
                                    settingName = 'disableAGC' />
                            </TogglesContainer>
                        </Panel>
                        <Onboarding section = 'settings-drawer' />
                    </SettingsContainer>
                </DrawerContainer>
            </AkCustomDrawer>
        );
    }


    _onBackButton: (*) => void;

    /**
     * Closes the drawer when back button is clicked.
     *
     * @returns {void}
     */
    _onBackButton() {
        this.props.dispatch(closeDrawer());
    }

    _onEmailBlur: (*) => void;

    /**
     * Updates email in (redux) state when email is updated.
     *
     * @param {SyntheticInputEvent<HTMLInputElement>} event - Event by which
     * this function is called.
     * @returns {void}
     */
    _onEmailBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setEmail(event.currentTarget.value));
    }

    _onEmailFormSubmit: (*) => void;

    /**
     * Prevents submission of the form and updates email.
     *
     * @param {SyntheticEvent<HTMLFormElement>} event - Event by which
     * this function is called.
     * @returns {void}
     */
    _onEmailFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        // $FlowFixMe
        this.props.dispatch(setEmail(event.currentTarget.elements[0].value));
    }

    _onNameBlur: (*) => void;

    /**
     * Updates name in (redux) state when name is updated.
     *
     * @param {SyntheticInputEvent<HTMLInputElement>} event - Event by which
     * this function is called.
     * @returns {void}
     */
    _onNameBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setName(event.currentTarget.value));
    }

    _onNameFormSubmit: (*) => void;

    /**
     * Prevents submission of the form and updates name.
     *
     * @param {SyntheticEvent<HTMLFormElement>} event - Event by which
     * this function is called.
     * @returns {void}
     */
    _onNameFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // $FlowFixMe
        this.props.dispatch(setName(event.currentTarget.elements[0].value));
    }
    /** Set AppId Start  **/
    _onAppIdBlur: (*) => void;

    _onAppIdBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setAppId(event.currentTarget.value));
    }
    
    _onAppIdFormSubmit: (*) => void;
    
    _onAppIdFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // $FlowFixMe
        this.props.dispatch(setAppId(event.currentTarget.elements[0].value));
    }
    /** Set AppId End  **/

    /** Set AppSecret Start  **/
    _onAppSecretBlur: (*) => void;

    _onAppSecretBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setAppSecret(event.currentTarget.value));
    }

    _onAppSecretFormSubmit: (*) => void;

    _onAppSecretFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // $FlowFixMe
        this.props.dispatch(setAppSecret(event.currentTarget.elements[0].value));
    }
    /** Set AppSecret End  **/

    /** Set Avatar Start  **/
    _onAvatarBlur: (*) => void;

    _onAvatarBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setAvatar(event.currentTarget.value));
    }

    _onAvatarFormSubmit: (*) => void;

    _onAvatarFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // $FlowFixMe
        this.props.dispatch(setAvatar(event.currentTarget.elements[0].value));
    }
    /** Set Avatar End  **/

    /** Set Host Start  **/
    _onHostBlur: (*) => void;

    _onHostBlur(event: SyntheticInputEvent<HTMLInputElement>) {
        this.props.dispatch(setHost(event.currentTarget.value));
    }

    _onHostFormSubmit: (*) => void;

    _onHostFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // $FlowFixMe
        this.props.dispatch(setHost(event.currentTarget.elements[0].value));
    }
    /** Set Host End  **/
    
}

/**
 * Maps (parts of) the redux state to the React props.
 *
 * @param {Object} state - The redux state.
 * @returns {Props}
 */
function _mapStateToProps(state: Object) {
    var obj={
        _email: state.settings.email,
        _isOnboardingAdvancedSettings: !advenaceSettingsSteps.every(i => state.onboarding.onboardingShown.includes(i)),
        _name: state.settings.name,
        _appId:state.settings.appid,
        _host:state.settings.host,
        _appSecret:state.settings.appSecret,
        _avatar:state.settings.avatar
    };
    return obj;
}

export default compose(connect(_mapStateToProps), withTranslation())(SettingsDrawer);
