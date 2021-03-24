function getTitle(vm) {
	const { title } = vm.$options;
	if (title) {
		return typeof title === 'function'
			? `Newsfacts | ${title.call(vm)}`
			: `Newsfacts | ${title}`;
	}
}
export default {
	created() {
		const title = getTitle(this);
		if (title) {
			document.title = title;
		}
	}
};