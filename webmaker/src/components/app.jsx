import { h, Component } from 'preact';
import { Router } from 'preact-router';

import MainHeader from './MainHeader.jsx';
import ContentWrap from './ContentWrap.jsx';
import Footer from './Footer.jsx';
import SavedItemPane from './SavedItemPane.jsx';
import Modal from './Modal.jsx';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	getInitialState() {
		return { isSavedItemPaneOpen: false, isModalOpen: false };
	}
	openSavedItemsPane() {
		this.setState({ isSavedItemPaneOpen: true });
	}
	closeSavedItemsPane() {
		this.setState({
			isSavedItemPaneOpen: false
		});
	}
	componentDidMount() {
		// Editor keyboard shortucuts
		window.addEventListener('keydown', event => {
			// TODO: refactor common listener code
			// Ctrl/⌘ + S
			if ((event.ctrlKey || event.metaKey) && event.keyCode === 83) {
				event.preventDefault();
				// saveItem();
				// trackEvent('ui', 'saveItemKeyboardShortcut');
			}
			// Ctrl/⌘ + Shift + 5
			if (
				(event.ctrlKey || event.metaKey) &&
				event.shiftKey &&
				event.keyCode === 53
			) {
				event.preventDefault();
				// scope.setPreviewContent(true, true);
				// trackEvent('ui', 'previewKeyboardShortcut');
			} else if ((event.ctrlKey || event.metaKey) && event.keyCode === 79) {
				// Ctrl/⌘ + O
				event.preventDefault();
				this.openSavedItemsPane();
				// trackEvent('ui', 'openCreationKeyboardShortcut');
			} else if (
				(event.ctrlKey || event.metaKey) &&
				event.shiftKey &&
				event.keyCode === 191
			) {
				// Ctrl/⌘ + Shift + ?
				event.preventDefault();
				// scope.toggleModal(keyboardShortcutsModal);
				// trackEvent('ui', 'showKeyboardShortcutsShortcut');
			} else if (event.keyCode === 27) {
				this.closeAllOverlays();
			}
		});
	}

	closeAllOverlays() {
		if (this.state.isSavedItemPaneOpen) {
			this.setState({ isSavedItemPaneOpen: false });
		}
	}

	render() {
		return (
			<div>
				<div class="main-container">
					<MainHeader openBtnHandler={this.openSavedItemsPane.bind(this)} />
					<ContentWrap />
					<div class="global-console-container" id="globalConsoleContainerEl" />
					<Footer />
				</div>

				<SavedItemPane
					isOpen={this.state.isSavedItemPaneOpen}
					closeHandler={this.closeSavedItemsPane.bind(this)}
				/>
				<div class="alerts-container" id="js-alerts-container" />
				<form
					style="display:none;"
					action="https://codepen.io/pen/define"
					method="POST"
					target="_blank"
					id="js-codepen-form"
				>
					<input
						type="hidden"
						name="data"
						value="{&quot;title&quot;: &quot;New Pen!&quot;, &quot;html&quot;: &quot;<div>Hello, World!</div>&quot;}"
					/>
				</form>

				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					style={{ display: 'none' }}
				>
					<symbol id="logo" viewBox="-145 -2 372 175">
						<g
							stroke="none"
							strokeWidth={1}
							fill="none"
							fillRule="evenodd"
							transform="translate(-145.000000, -1.000000)"
						>
							<polygon
								id="Path-1"
								fill="#FF4600"
								points="31 0 232 0 132 173.310547"
							/>
							<polygon
								id="Path-1"
								fill="#FF6C00"
								points="0 0 201 0 101 173.310547"
							/>
							<polygon
								id="Path-1"
								fill="#FF6C00"
								transform="translate(271.500000, 86.500000) scale(1, -1) translate(-271.500000, -86.500000) "
								points="171 0 372 0 272 173.310547"
							/>
							<polygon
								id="Path-1"
								fill="#FF4600"
								transform="translate(241.500000, 86.500000) scale(1, -1) translate(-241.500000, -86.500000) "
								points="141 0 342 0 242 173.310547"
							/>
						</g>
					</symbol>
					<symbol id="bug-icon" viewBox="0 0 24 24">
						<path d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z" />
					</symbol>
					<symbol id="google-icon" viewBox="0 0 24 24">
						<path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
					</symbol>
					<symbol id="fb-icon" viewBox="0 0 24 24">
						<path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
					</symbol>
					<symbol id="github-icon" viewBox="0 0 24 24">
						<path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
					</symbol>
					<symbol id="settings-icon" viewBox="0 0 24 24">
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</symbol>
					<symbol id="twitter-icon" viewBox="0 0 16 16">
						<path d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809
			c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z" />
					</symbol>
					<symbol id="heart-icon" viewBox="0 0 24 24">
						<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
					</symbol>
					<symbol id="play-icon" viewBox="0 0 24 24">
						<svg>
							<path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
						</svg>
					</symbol>
					<symbol id="cancel-icon" viewBox="0 0 24 24">
						<svg>
							<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z" />
						</svg>
					</symbol>
					<symbol id="chevron-icon" viewBox="0 0 24 24">
						<svg>
							<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
						</svg>
					</symbol>
					<symbol id="chat-icon" viewBox="0 0 24 24">
						<path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M8,14H6V12H8V14M8,11H6V9H8V11M8,8H6V6H8V8M15,14H10V12H15V14M18,11H10V9H18V11M18,8H10V6H18V8Z" />
					</symbol>
					<symbol id="gift-icon" viewBox="0 0 24 24">
						<path d="M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z" />
						<symbol id="gift-icon" viewBox="0 0 24 24" />
						<symbol id="cross-icon" viewBox="0 0 24 24">
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</symbol>
						<symbol id="keyboard-icon" viewBox="0 0 24 24">
							<path d="M19,10H17V8H19M19,13H17V11H19M16,10H14V8H16M16,13H14V11H16M16,17H8V15H16M7,10H5V8H7M7,13H5V11H7M8,11H10V13H8M8,8H10V10H8M11,11H13V13H11M11,8H13V10H11M20,5H4C2.89,5 2,5.89 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7C22,5.89 21.1,5 20,5Z" />
						</symbol>
						<symbol id="mode-icon" viewBox="0 0 100 100">
							<g>
								<rect x={0} y={0} width={28} height={47} />
								<rect x={36} y={0} width={28} height={47} />
								<rect x={72} y={0} width={28} height={47} />
								<rect x={0} y={53} width={100} height={47} />
							</g>
						</symbol>
						<symbol id="vertical-mode-icon" viewBox="0 0 100 100">
							<g>
								<rect x={0} y={0} width={20} height={100} />
								<rect x={23} y={0} width={20} height={100} />
								<rect x={46} y={0} width={20} height={100} />
								<rect x={69} y={0} width={32} height={100} />
							</g>
						</symbol>
						<symbol id="loader-icon" viewBox="0 0 44 44">
							{'{'}/* By Sam Herbert (@sherb), for everyone. More @
							http://goo.gl/7AJzbL */{'}'}
							<g fill="none" fillRule="evenodd" strokeWidth={10}>
								<circle cx={22} cy={22} r={1}>
									<animate
										attributeName="r"
										begin="0s"
										dur="1.8s"
										values="1; 20"
										calcMode="spline"
										keyTimes="0; 1"
										keySplines="0.165, 0.84, 0.44, 1"
										repeatCount="indefinite"
									/>
									<animate
										attributeName="stroke-opacity"
										begin="0s"
										dur="1.8s"
										values="1; 0"
										calcMode="spline"
										keyTimes="0; 1"
										keySplines="0.3, 0.61, 0.355, 1"
										repeatCount="indefinite"
									/>
								</circle>
								<circle cx={22} cy={22} r={1}>
									<animate
										attributeName="r"
										begin="-0.9s"
										dur="1.8s"
										values="1; 20"
										calcMode="spline"
										keyTimes="0; 1"
										keySplines="0.165, 0.84, 0.44, 1"
										repeatCount="indefinite"
									/>
									<animate
										attributeName="stroke-opacity"
										begin="-0.9s"
										dur="1.8s"
										values="1; 0"
										calcMode="spline"
										keyTimes="0; 1"
										keySplines="0.3, 0.61, 0.355, 1"
										repeatCount="indefinite"
									/>
								</circle>
							</g>
						</symbol>
					</symbol>
				</svg>
			</div>
		);
	}
}
