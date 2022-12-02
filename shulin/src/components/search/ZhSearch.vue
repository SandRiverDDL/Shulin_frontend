<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import {
	Select as ElSelect,
	Option as ElOption,
	Input as ElInput,
	Button as ElButton,
} from 'element-ui';
const options = {
	W: "全文", U: "篇关摘", T: "篇名", K: "关键词", B: "摘要", A: "作者", F: "第一作者", R: "参考文献", C: "分类号"
}

const form = reactive({
	pick: "W",
	text: ""
})
const emit = defineEmits(["search"]);
function onSubmit() {
	emit("search", form)
}
</script>
<template>
	<div class="d-flex bar">
		<div class="placer"></div>
		<ElInput v-model="form.text" placeholder="搜索文献资源" class="text-token">
			<template #prepend>
				<ElSelect v-model="form.pick" class="pick-token">
					<ElOption v-for="(label, value) in options" :label="label" :value="value" :key="value"></ElOption>
				</ElSelect>
			</template>
			<template #suffix>
				<ElButton circle icon="el-icon-search" @click="onSubmit" class="bg-transparent border-0 ease-primary">
				</ElButton>
			</template>
		</ElInput>
		<div class="placer">
			<div>
				<RouterLink :to="{ name: 'advanced_search' }" class="ease-primary">
					高级搜索
					<i class="el-icon-arrow-right"></i>
				</RouterLink>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/utilities/api";

.text-token {
	flex: none;
	width: 75%;
}

.pick-token {
	width: 120px;
}

.placer {
	flex: auto;
	width: 0px;
}

.text-token+.placer {
	padding-left: 10px;
	text-align: start;
	font-size: 14px;
	line-height: 36px;
	margin-top: 4px;
}

.ease-primary {
	$time: 0.3s;
	text-decoration: none;
	color: $gray-600;
	transition: ease-in $time;

	&:hover {
		color: $primary;
		transition: ease-out $time;
	}
}

.bar {
	margin: 0 auto;
	width: 1200px;
}

@media screen and (max-width:1440px) {
	.bar {
		width: 1000px;
	}
}

@media screen and (max-width:1200px) {
	.bar {
		width: 850px;
	}
}

@media screen and (max-width:992px) {
	.bar {
		width: 700px;
	}

	.text-token {
		width: 60%;
	}

	.pick-token {
		width: 80px;
	}
}

// @media screen and (max-width:768px) {
// 	.bar {
// 		width: 100%;
// 	}
// }
</style>