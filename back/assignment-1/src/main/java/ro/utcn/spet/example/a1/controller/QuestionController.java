package ro.utcn.spet.example.a1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.spet.example.a1.dto.QuestionDTO;
import ro.utcn.spet.example.a1.service.QtagManagementService;
import ro.utcn.spet.example.a1.service.QuestionManagementServive;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionManagementServive questionService;

    @GetMapping("/questions")
    public List<QuestionDTO> readAll() {
        return questionService.question();
    }

    @PostMapping("/questions")
    public QuestionDTO create(@RequestBody QuestionDTO dto) {
        return questionService.insert(dto);
    }
}
