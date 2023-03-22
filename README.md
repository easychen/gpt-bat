 # GPT BAT

> 中文说明见后，本英文由GPT翻译。

Due to the limited capacity of GPT, especially GPT-3.5, it can be difficult to process long content in a chat window. Therefore, I developed GPT BAT, which can split long texts, submit them to GPT, and then concatenate the results for download.

Try it out at https://gpt.level06.com/

## Instructions

1. Choose a splitting method, which can be by line, by length, or by a specific character.

![](images/20230321225147.png)

2. Fill in the settings for each call to the GPT Chat API, including System prompt, User prompt, Max Tokens, and the model.

![](images/20230321225332.png)

3. Click the 🔑 button in the lower left corner and enter your OpenAI or API2D key.

![](images/20230321225451.png)

4. Select the file to process. The preview on the right shows the segmented text and the estimated number of tokens required. Note that this token count is only a rough estimate, and the actual consumption may differ.

![](images/20230321225630.png)

5. Click "Start Processing" to begin the batch operation. If there are any failures, you can refresh and retry. The processed parts will be cached in the browser and skipped during subsequent attempts. Once completed, the file will be automatically downloaded. Verify the file and clear the cache if necessary.

![](images/20230321230716.png)


# GPT BAT

由于GPT尤其是3.5每次能处理的内容有限，如果有长内容要处理，聊天窗口就显得特别麻烦，因此我开发了 GPT BAT，它可以将长文分隔，提交给GPT，然后再将内容拼接下载。

试用地址 https://gpt.level06.com/

## 使用说明 


1. 选择分隔方式，可以按行、按长度或者按特殊字符分隔。

![](images/20230321225147.png)

2. 填入每次调用 GPT Chat 接口的设置，包括 System 提示词，User 提示词，Max Tokens，模型。

![](images/20230321225332.png)

3. 点击左下角的 🔑 按钮，填写 OpenAI 或者 API2D 的 Key

![](images/20230321225451.png)


4. 选择要处理的文件，可以在右侧预览分段和要消耗的 Token 数量，注意这个 Token 只是非常粗略的估算，一切以最终消费为准。

![](images/20230321225630.png)


5. 点击「开始处理」，进行批量操作。如中途失败，可刷新重试，已处理部分会缓存到浏览器，自行跳过不会再次处理。完成后会自动下载文件，查看文件无误后，可以清除缓存。

![](images/20230321230716.png)
